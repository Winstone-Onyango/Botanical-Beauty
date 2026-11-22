from django.db import models
from django.utils.text import slugify

class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        abstract = True

class Category(TimeStampedModel):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=120, unique=True, blank=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to="categories/", blank=True, null=True)
    is_active = models.BooleanField(default=True)
    class Meta:
        ordering = ["name"]
        verbose_name_plural = "categories"
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    def __str__(self):
        return self.name

class Product(TimeStampedModel):
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name="products")
    name = models.CharField(max_length=180)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    brand = models.CharField(max_length=120, blank=True)
    description = models.TextField()
    size = models.CharField(max_length=80, blank=True)
    ingredients_or_details = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    image = models.ImageField(upload_to="products/")
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    class Meta:
        ordering = ["-is_featured", "name"]
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    def __str__(self):
        return self.name

class Service(TimeStampedModel):
    name = models.CharField(max_length=160)
    slug = models.SlugField(max_length=180, unique=True, blank=True)
    description = models.TextField()
    image = models.ImageField(upload_to="services/", blank=True, null=True)
    duration = models.CharField(max_length=80, blank=True)
    price_from = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    display_order = models.PositiveIntegerField(default=0)
    class Meta:
        ordering = ["display_order", "name"]
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)
    def __str__(self):
        return self.name

class GalleryImage(TimeStampedModel):
    CATEGORY_CHOICES = [
        ("products", "Products"), ("makeup", "Makeup"), ("nails", "Nails"),
        ("hair", "Hair"), ("salon", "Salon"), ("other", "Other"),
    ]
    title = models.CharField(max_length=150, blank=True)
    image = models.ImageField(upload_to="gallery/")
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default="other")
    caption = models.CharField(max_length=240, blank=True)
    is_active = models.BooleanField(default=True)
    display_order = models.PositiveIntegerField(default=0)
    class Meta:
        ordering = ["display_order", "-created_at"]
    def __str__(self):
        return self.title or f"Gallery image {self.pk}"

class Testimonial(TimeStampedModel):
    customer_name = models.CharField(max_length=100)
    quote = models.TextField()
    is_approved = models.BooleanField(default=False)
    class Meta:
        ordering = ["-created_at"]
    def __str__(self):
        return self.customer_name

class Enquiry(TimeStampedModel):
    SUBJECT_CHOICES = [
        ("product", "Product enquiry"), ("service", "Service enquiry"),
        ("appointment", "Appointment"), ("other", "Other"),
    ]
    name = models.CharField(max_length=120)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    subject = models.CharField(max_length=20, choices=SUBJECT_CHOICES, default="other")
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    class Meta:
        ordering = ["-created_at"]
    def __str__(self):
        return f"{self.name} — {self.get_subject_display()}"
