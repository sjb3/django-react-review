Basic setup (didn't use pyenv?)
Backend

\$ pipenv shell

\$ pipenv install django djangorestframeworkdjango-rest-knox

\$ django-admin startproject leadmanager

==> python manage.py runserver

REDUX work flow
first off,

create store.js: frontend > src > store.js
rootReducer (meeting place for all the reducers)
src/reducers/index.js

second) reducers
=> app.js, don't forget to wrap the div with Provider(coming from react-redux) and pass store object

third) create actions
to get the data from backend

==> yarn run dev
