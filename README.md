# Lampa/Online.js
Форк плагин для "Lampa".

Репозиторий содержит резервную копию кода оригинального плагина для Lampa с официального сайта, а также версию, в которую я буду вносить изменения по мере необходимости, для собственных нужд.

# Размещение плагина на встроенном веб-сервере роутера (веб-интерфейс).

Описывается добавление на роутер с прошивкой OpenWRT LuCI

1. Соединяемся с роутером.

> ssh 192.168.0.1 -l root
> 
> The authenticity of host '192.168.0.1 (192.168.0.1)' can't be established.
> 
> RSA key fingerprint is SHA256:*******************************************.
> 
> Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
> 
> Warning: Permanently added '192.168.0.1' (RSA) to the list of known hosts.
> 
> root@192.168.0.1's password:

2. Вводите пароль доступа к вашему роутеру и нажимаете ENTER.
3. Создаёте на встроенном веб-сервере роутера папку, в которой будет лежать плагин.

> mkdir -p /www/js/lampa/

Папка "/www", это папка встроенного веб-сервера.
Вы можете создать любую другую папку для хранения скрипта в папке "/www", но тогда не забудьте подменить это значение в следующщих шагах!

4. Выполните скачивания скрипта из данного репозитория на ваш роутер, в ранее созданную для него директорию.

> wget --no-check-certificate -O "/www/js/lampa/online.js" "https://raw.githubusercontent.com/ifrolofff/lampa.online.js/main/online.js"

Теперь скрипт будет доступен на вашем роутере и к нему смогут получить доступ все те, кто имеет доступ к веб-интерфейсу роутера.
Для доступа к скрипту используйте ссылку: http://192.168.0.1/js/lampa/online.js

5. После скачивания скрипта на ваш роутер, вы можете добавить ссылку на него на устройство с установленной LAMPA, главное помните, чтобы данному устройству был разрешен доступ к веб-интерфейсу роутера иначе у вас ничего не получится.
