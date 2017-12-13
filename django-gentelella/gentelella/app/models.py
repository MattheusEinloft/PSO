from __future__ import unicode_literals

from django.db import models

class IpsFonte(models.Model):
    ident = models.IntegerField(unique=True, default=0)
    endereco_ip = models.CharField(max_length=15, unique=True)
    numero_pacotes = models.IntegerField()
    pais = models.CharField(max_length=40)

    def __str__(self):
        return self.endereco_ip

class IpTables(models.Model):
    ident = models.IntegerField(unique=True, default=0)
    total_pacotes = models.IntegerField(unique=True)

    def __str__(self):
        return str(self.total_pacotes)

class Portas(models.Model):
    ident = models.IntegerField(unique=True, default=0)
    nome = models.CharField(max_length=30, unique=True)
    numero_porta = models.CharField(max_length=15)
    quantidade = models.IntegerField()

    def __str__(self):
        return self.nome
