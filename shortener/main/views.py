from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from .models import Url


@csrf_exempt
def main_view(request):
    # return render(request, 'index2.html')
    link = None
    if request.method == 'POST':
        url = request.POST.get('url')
        if url:
            link = Url.objects.create(href=url)
    return render(request, 'index2.html', context={'link': link})


def link_view(request, link_id):
    url = Url.objects.get(id=link_id)
    return render(request, 'link.html', {'link': url})


def history_view(request):
    urls = Url.objects.all()
    return render(request, 'history.html', {'urls': urls})
