
# Playlist With Friends

# Descripción

Playlist with friends es una aplicación que te permite crear una lista de reproducción en Spotify para que todos los que estén inscritos en la lista puedan disfrutarla. La aplicación crea la lista de reproducción según las preferencias de música de las personas que se unen. La aplicación también proporciona información interesante sobre las preferencias de tu amigo en la música.

# Tabla de Contenidos

1. Instalación
2. Uso
3. Contribuciónes
4. Creditos
5. Licencia

# 1. Instalación

## Initial requirements

* Windows, Linux or MacOS operating system
* npm to install project libraries. Go to [npm official documentation](https://www.npmjs.com/get-npm) for more information.
* Download or clone the repository.

## Front-end (Angular-CLI)

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Production server (build)

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Back-end (Node.js & MongoDB)

Run `npm start` to run the API. There is no need to setup the database, it is automatically connected to the cloud using [MongoDB Atlas](https://www.mongodb.com/cloud).

# 2. Uso

### Exploring PlaylistWFriends main features

## Main Features

**/create** - Interface to create a new shared playlist. You need to authorize your Spotify account to sync your music preferences with our app. Once you successfully authorize your account with Spotify, you get a random code (the unique identifier of your playlist).

**/join** - Interface to join an existing playlist. You just need to provide the unique identifier of the playlist under the specified field.

**/get** - Interface to generate a new playlist based on the music preferences of all the members of an existing playlist previously created. You can set a playlist name. As soon as it generated, it will be immediately added to your Spotify playlists.

# 3. FAQ

## Does the app works with any type of Spotify's account?

Yes, even with free accounts. There are no restrictions.

## Are there any limits in the number of members that can join each playlist?

No, we don't have any limits. Any amount of members can join each playlist.

## How many songs do you add to the playlist when it is finally generated?

We add up to 50 songs. This is an SPOTIFY API limitation.

## How do you determine what songs are going to be chosen for the playlist?

Every member of the playlist authorizes the app so we can get their music preferences in Spotify. Therefore, we lookup at the user's top music genres in order to create an smart playlist.

# 4. Creditos

Juan Manuel Romero Guardado - https://github.com/Jumarogu
Juan Pablo Iñigo Escalante - https://github.com/Juanpaie
Santiago Castro Macías - https://github.com/scastro93

# 5. Licencia

By contributing to PlaylistWithFriends, you agree that your contributions will be licensed under the LICENSE file.

MIT License

Copyright (c) Facebook, Inc. and its affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
