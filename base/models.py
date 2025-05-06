from django.db import models
from django.utils.text import slugify
from multiselectfield import MultiSelectField

class Career(models.Model):
    EXPERIENCE_CHOICES = [
        ('entry', 'Entry Level'),
        ('mid', '1-2 years'),
        ('senior', '3-4 years'),
    ]

    WORK_TYPE_CHOICES = [
        ('remote', 'Remote'),
        ('onsite', 'Onsite'),
        ('hybrid', 'Hybrid'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True, blank=True)
    description = models.TextField(blank=True, null=True)
    icon = models.CharField(max_length=200, blank=True, null=True)

    experience = MultiSelectField(
        choices=EXPERIENCE_CHOICES,
        blank=True
    )
    work_type = MultiSelectField(
        choices=WORK_TYPE_CHOICES,
        blank=True
    )

    responsibilities = models.JSONField(default=list, blank=True)
    skills = models.JSONField(default=list, blank=True)
    location = models.CharField(max_length=200, blank=True, null=True)
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
