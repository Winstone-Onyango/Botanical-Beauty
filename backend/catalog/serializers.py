from rest_framework import serializers
from .models import Category, Product, Service, GalleryImage, Testimonial, Enquiry

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name", "slug", "description", "image"]

class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source="category.name", read_only=True)
    class Meta:
        model = Product
        fields = ["id", "name", "slug", "brand", "category", "category_name", "description",
                  "size", "ingredients_or_details", "price", "image", "is_featured"]

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ["id", "name", "slug", "description", "image", "duration", "price_from"]

class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = ["id", "title", "image", "category", "caption"]

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ["id", "customer_name", "quote"]

class EnquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Enquiry
        fields = ["id", "name", "email", "phone", "subject", "message", "created_at"]
        read_only_fields = ["id", "created_at"]
    def validate_message(self, value):
        if len(value.strip()) < 10:
            raise serializers.ValidationError("Please provide a little more detail.")
        return value.strip()
