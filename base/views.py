from django.shortcuts import render
from .models import Career

# Create your views here.
def home(request):
    return render(request, 'base/home.html')

def about(request):
    return render(request, 'base/about.html')

def contact(request):
    return render(request, 'base/contact.html')

def services(request):
    return render(request, 'base/services.html')

def careers(request):
    careers = Career.objects.all()
    context = {
        'careers': careers
    }
    return render(request, 'base/careers.html', context)

def career_details(request, slug):
    career = Career.objects.get(slug=slug)
    context = {
        'career': career
    }
    return render(request, 'base/career_details.html', context)

def error_404(request, exception):
    context = {}
    return render(request, 'base/404.html', context)

def teams(request):
    return render(request, 'base/teams.html')
