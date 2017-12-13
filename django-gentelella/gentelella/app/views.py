from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from .models import IpTables
from .models import IpsFonte
from .models import Portas


def index(request):
    context = {}
    template = loader.get_template('app/index.html')
    return HttpResponse(template.render(context, request))

def trab_final(request):
    n_pacotes = IpTables.objects.filter(ident=1).get()

    ip1 = IpsFonte.objects.filter(ident=1).get()
    ip2 = IpsFonte.objects.filter(ident=2).get()
    ip3 = IpsFonte.objects.filter(ident=3).get()
    ip4 = IpsFonte.objects.filter(ident=4).get()
    ip5 = IpsFonte.objects.filter(ident=5).get()
    ip6 = IpsFonte.objects.filter(ident=6).get()
    ip7 = IpsFonte.objects.filter(ident=7).get()
    ip8 = IpsFonte.objects.filter(ident=8).get()
    ip9 = IpsFonte.objects.filter(ident=9).get()
    ip10 = IpsFonte.objects.filter(ident=10).get()

    port1 = Portas.objects.filter(ident=1).get()
    port2 = Portas.objects.filter(ident=2).get()
    port3 = Portas.objects.filter(ident=3).get()
    port4 = Portas.objects.filter(ident=4).get()
    port5 = Portas.objects.filter(ident=5).get()
    port6 = Portas.objects.filter(ident=6).get()
    port7 = Portas.objects.filter(ident=7).get()
    port8 = Portas.objects.filter(ident=8).get()
    port9 = Portas.objects.filter(ident=9).get()
    port10 = Portas.objects.filter(ident=10).get()
    context = { 'n_pacotes': n_pacotes,
                'ip1': ip1,
                'ip2': ip2,
                'ip3': ip3,
                'ip4': ip4,
                'ip5': ip5,
                'ip6': ip6,
                'ip7': ip7,
                'ip8': ip8,
                'ip9': ip9,
                'ip10': ip10,
                'port1': port1,
                'port2': port2,
                'port3': port3,
                'port4': port4,
                'port5': port5,
                'port6': port6,
                'port7': port7,
                'port8': port8,
                'port9': port9,
                'port10': port10}
    template = loader.get_template('app/trab_final.html')
    return HttpResponse(template.render(context, request))


def gentella_html(request):
    context = {}
    # The template to be loaded as per gentelella.
    # All resource paths for gentelella end in .html.

    # Pick out the html file name from the url. And load that template.
    load_template = request.path.split('/')[-1]
    template = loader.get_template('app/' + load_template)
    return HttpResponse(template.render(context, request))
