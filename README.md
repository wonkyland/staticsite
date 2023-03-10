# Edit content

When editing files, all changes are saved automatically, no need to click save.

All content related files are in the folder:

> staticsite/src/assets

Don't change the files in the parent folders of the assets folder, unless you know what you are doing ;)

## Pages and posts
The pages and posts are in a simplyfied format called 'markdown' and have the file extension '.md'. For special formatting (centering, flowing text around image, etc) it may be necessary to use html as well.

The pages and posts are located in the folders:

> staticsite/src/assets/pages

> staticsite/src/assets/posts

## Images and other media files
Images are stored in the folder:

> staticsite/src/assets/images

To add an image to a page use the following markdown: !\[your image description\](../images/Braintec.jpg)

Other media files like zip, pdf, ... are stored in the folder:
> staticsite/src/assets/media

---

# Layout

![Layout](Layout.png "Layout")

---

# Testing on the local development server

To test changes to pages and posts before uploading them to the internet, run the command `ng serve`. The easiest way to do that is to:
- Click on the top button (Explorer) on the left hand side
- Navigate into the sub-menu called 'NPM scripts'
- Click on the 'play' triangle button to the right of the menu item 'start'

> ![Testing](Testing.png "Testing")

The build will start and when successful the message 'Compiled successfully' will appear (after a few minutes).

> ![Success](BuildSuccess.png "Build success")

Then you can navigate to `http://localhost:4200/` to view your changes served by the local development server.

Once the build process is started, it will keep on running. On every change to the pages, it will rebuild the site automatically. Refresh the browser (F5) to see the changes.

---

# Uploading the changes

When you are happy with the changes, you can send them to Github for publication.
- Click on the third button (Source control) of the left-hand side menu 
- Type a short informational message about your changes
- Click the 'Commit' button.
  - This will 'commit' your code LOCALLY only
- Click the 'Sync changes' button to send it to Github

---

# Build on Github

When the changes are synced to Github, a Github action is triggered that will build a new version of the site and publish the new build on 'Github pages'.

The progress of the build can be monitore at:
> https://github.com/wonkyland/staticsite/actions

It takes 3-5 minutes before your changes are published.

When successful, the changes are visible on the site:

> https://wonkyland.github.io/staticsite/
