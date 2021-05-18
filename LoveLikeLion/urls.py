from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('bbs/', include('bbs.urls')),
    path('user/', include('userManage.urls'))
]
