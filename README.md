# KTC
![KTC](http://i.imgur.com/Gx90AFO.png)

Test project for the KTC Agency.

## Installation
To only see the static files of the build we can direct download it[from here](https://codeload.github.com/alesitalugo/KTC/zip/gh-pages) and then open the `index.html` file from our browser.

Or,

We can clone the repository then go to the `build` directory and run a simple server with python.

```
git clone git@github.com:alesitalugo/KTC.git
cd KTC/build
python -m SimpleHTTPServer
```

And open `http://0.0.0.0:8000/` on our favourite server.

## Dev Environment
To run dev environment we have to clone the project and we need to have [Node.js](nodejs.org) installed.

Then we need to install the package manager Bower and the task manager Grunt with:

```
npm install -g bower grunt-cli
```

To install the project dependencies and the dev tools:

```
bower install && npm install
```

Now we can execute the Gruntfile to run the dev envitonment:

```
grunt serve
```

To build a version of our site we can execute:

```
grunt build
```

## License

This code is released under the Beerware License:

> "THE BEER-WARE LICENSE" (Revision 42):
>
> [Alejandra Lugo](https://github.com/alesitalugo) wrote this file.  As long as you retain this notice you
> can do whatever you want with this stuff. If we meet some day, and you think
> this stuff is worth it, you can buy me a beer in return.
>
> Alejandra Lugo - @alesitalugo.
