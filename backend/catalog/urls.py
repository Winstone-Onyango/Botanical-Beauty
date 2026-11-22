from django.urls import path
from . import views

urlpatterns = [
    path("categories/", views.CategoryList.as_view(), name="categories"),
    path("products/", views.ProductList.as_view(), name="products"),
    path("products/<slug:slug>/", views.ProductDetail.as_view(), name="product-detail"),
    path("services/", views.ServiceList.as_view(), name="services"),
    path("gallery/", views.GalleryList.as_view(), name="gallery"),
    path("testimonials/", views.TestimonialList.as_view(), name="testimonials"),
    path("enquiries/", views.EnquiryCreate.as_view(), name="enquiry-create"),
]
