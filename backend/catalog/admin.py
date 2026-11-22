from django.contrib import admin
from .models import Category, Product, Service, GalleryImage, Testimonial, Enquiry

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "is_active", "updated_at")
    list_filter = ("is_active",)
    search_fields = ("name",)
    prepopulated_fields = {"slug": ("name",)}

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "brand", "is_featured", "is_active", "updated_at")
    list_filter = ("category", "is_featured", "is_active")
    search_fields = ("name", "brand", "description")
    prepopulated_fields = {"slug": ("name",)}

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("name", "display_order", "is_active")
    list_filter = ("is_active",)
    search_fields = ("name",)
    prepopulated_fields = {"slug": ("name",)}

@admin.register(GalleryImage)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "display_order", "is_active")
    list_filter = ("category", "is_active")

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("customer_name", "is_approved", "created_at")
    list_filter = ("is_approved",)

@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "subject", "is_read", "created_at")
    list_filter = ("subject", "is_read")
    search_fields = ("name", "email", "message")
    readonly_fields = ("created_at", "updated_at")

admin.site.site_header = "Beauty Shop Administration"
admin.site.site_title = "Beauty Shop Admin"
admin.site.index_title = "Manage your beauty shop website"
