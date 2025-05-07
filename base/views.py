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

def team(request):
    return render(request, 'base/team.html')

def custom_page_not_found(request, exception):

    context = {
        'path': request.path
    }
    return render(request, '404.html', context=context, status=404)