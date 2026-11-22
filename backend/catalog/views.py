from rest_framework import generics, filters
from rest_framework.permissions import AllowAny
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from .models import Category, Product, Service, GalleryImage, Testimonial, Enquiry
from .serializers import (CategorySerializer, ProductSerializer, ServiceSerializer,
                          GalleryImageSerializer, TestimonialSerializer, EnquirySerializer)

class PublicListMixin:
    permission_classes = [AllowAny]
    authentication_classes = []

class CategoryList(PublicListMixin, generics.ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.filter(is_active=True)

class ProductList(PublicListMixin, generics.ListAPIView):
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["name", "brand", "description", "category__name"]
    ordering_fields = ["name", "created_at", "price"]
    def get_queryset(self):
        qs = Product.objects.filter(is_active=True, category__is_active=True).select_related("category")
        category = self.request.query_params.get("category")
        featured = self.request.query_params.get("featured")
        if category:
            qs = qs.filter(category__slug=category)
        if featured == "true":
            qs = qs.filter(is_featured=True)
        return qs

class ProductDetail(PublicListMixin, generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    lookup_field = "slug"
    queryset = Product.objects.filter(is_active=True, category__is_active=True).select_related("category")

class ServiceList(PublicListMixin, generics.ListAPIView):
    serializer_class = ServiceSerializer
    queryset = Service.objects.filter(is_active=True)

class GalleryList(PublicListMixin, generics.ListAPIView):
    serializer_class = GalleryImageSerializer
    queryset = GalleryImage.objects.filter(is_active=True)

class TestimonialList(PublicListMixin, generics.ListAPIView):
    serializer_class = TestimonialSerializer
    queryset = Testimonial.objects.filter(is_approved=True)

class EnquiryCreate(PublicListMixin, generics.CreateAPIView):
    serializer_class = EnquirySerializer
    queryset = Enquiry.objects.all()
    parser_classes = [JSONParser, FormParser, MultiPartParser]
