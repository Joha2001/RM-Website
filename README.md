# RM-Website
## This is a personal website for Ratnajirao Mylavarapu created by John Hoang
***Feel free to email me at johnhoang314@gmail.com for any questions, queries, or issues!***  
*I will not be explaining code or how to make substantial changes to code, and will only be explaining changes that will need to be done for existing pages.*  
The following sections will divy up the separate pages and what can be done/altered on those pages:  
**Home**  
**About**  
**Work**  
**Contact**  
**Bottom Bar**
## Home
Home is split into two sections. Home.js and HomePhotos.js
### Home.js
Within this section, you can alter the Header text within the two `<h1>`'s. The default text is "Header Here".  
For the image slideshow, you can currently alter the duration of an image. The default time is 3000ms (3 seconds).  
Within the `<div>` with `className="desc-text"`, you can alter the body text by changing text within the two `<p>`'s. To make a line break, include a `<br />`. 
For more information on the slideshow, read more on [React Slideshow Images](https://react-slideshow.herokuapp.com/)
### HomePhotos.js
This section is where you will add or remove photos from the slideshow.
Referring to the initial code.
```
export const HomePhotos =[
    {
            title: "Photo1",
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    },
    {
            title: "Photo2",
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    },
    {
            title: "Photo3",
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    },
]
```
To make the slideshow go Photo1 -> Photo2 -> Photo3 -> PhotoCustom. The code would become
```
export const HomePhotos =[
{
            title: "Photo1",
            src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
},
{
            title: "Photo2",
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
},
{
            title: "Photo3",
            src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
},
{
            title: "(Your Photo Title)",
            src: "(Link to your Photo)",
},
]
```
## About
Exactly like the text in the home section.  
Within this section, you can alter the Header text within the two `<h1>`'s. The default text is "Header Here".  
Within the `<div>` with `className="desc-text"`, you can alter the body text by changing text within the two `<p>`'s. To make a line break, include a `<br />`.  
To change the image, change the link between the quotation marks in `src="https://i1.sndcdn.com/artworks-sAsRV00EqUmWoXUQ-OMw9yQ-t500x500.jpg"` 
## Work
There are 4 sections to work that can be changed.  
*As adding/removing in ImageData and VideoData are similar to how it's done for HomePhotos, I am just utilizing the comments I put in the code*
### ImageData.js
For each image, copy the following
```
{
        src: "link to image",
        thumbnail: "also link to image (if there is a scaled version for thumbnail, use here)",
        thumbnailWidth: 320, <- can be any numerical value (can keep to aspect ratio or conform to other imgs)
        thumbnailHeight: 174, <- can be any numerical value (can keep to aspect ratio or conform to other imgs)
        caption: "put the text you would like to see when you open the image" 
},
```
   between the square braces and after any previous one.
### VideoData.js
For each new video, copy the id section of the video. eg. https://www.youtube.com/watch?v=dQw4w9WgXcQ The id would be dQw4w9WgXcQ.  
```
Therefore, you would want to add 
{
        id: "dQw4w9WgXcQ",
},
```
between the square braces and after any previous one.
### WorkP.js
You can change the value between the braces for margin to decrease/increase the space between images on the grid.
### WorkV.js
Within opts, the height and width value can be changed to alter the box size of the video.  
Furthermore, you can change the autoplay value to 1 to have the video automatically play (check this [link](https://developers.google.com/youtube/player_parameters) for more options)  
To add more space between videos, add more `<p></p>` after the first set.
## Contact
Nothing will be changed here. However, to change the emails, you will be utilizing SendGrid.  
You will be making changes in server.js.  
If you need more help, try using the resources below first.
### SendGrid Resources (that I used)
[SendGrid How To](https://sendgrid.com/docs/ui/sending-email/how-to-send-an-email-with-dynamic-transactional-templates/)  
[SendGrid GitHub](https://github.com/sendgrid/sendgrid-nodejs/tree/main/packages/mail)  
[Arjun Bastola - How to Set Up SendGrid](https://medium.com/@arjunbastola/sending-emails-using-node-js-and-sendgrid-5ad4dea7cf44)  
## Bottom Bar
### BottomBar.js
Nothing will be changed here.
### SocialData.js
Taken from the comments that I put (because it's explained fairly well there)
In order to add a new social media, copy the following example:
```    
{
            title: 'LinkedIn',
            path: 'https://www.linkedin.com/',
            icon: <FaIcons.FaLinkedin/>,
}, 
``` 
   After copying this statement, change the title to the name of the platform.
   
   Path refers to the link of your page.

   Refer to the [React Icons Page](https://react-icons.github.io/react-icons/) for icons.
   
   You can use the search bar, but if you choose an icon that doesn't start with FA
   follow the import statement above to add that icon.
   Every icon will be `<FaIcons.(NameOfIcon)>`.
   If this does not make sense, refer to the React Icons website (link above).
