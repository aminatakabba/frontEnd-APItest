# React Account Area Adventure

Hi there, feel free to fork this repository.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### README FOR GUIDENCE:


With a little bit of time I decided to do things differently.
    - In the office I was trying to use the fetch methode to get data from the api and strugled to map though the data. I then decided to use the axios library, it’s my second time using it but I found it much easier.
    - Rendered each product once but when I tried to render the ‘Huel Powder’ , the issue with this was the name. Because the name is different to the hard coded version I wasn’t able to find a common value to put them all under the same product.
    - Did some error handling for when the API cannot be fetched as well as if there was no data in it.
    - Because I wasn’t able to find a common value between the three “Huel Powder” products I decided to add the total of all of the items. This would also be more visually appealing to the custumer. 
    - The extension I use to format JSON files is called 'JSON Formatter' on the chrome web store
