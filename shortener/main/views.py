from django.shortcuts import render

from .models import Url


def main_view(request):
    link = None
    if request.method == 'POST':
        url = request.POST.get('url')
        if url:
            link = Url.objects.create(href=url)
    return render(request, 'index.html', context={'link': link})


def link_view(request, link_id):
    url = Url.objects.get(id=link_id)
    return render(request, 'link.html', {'link': url})
