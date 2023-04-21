# Edit pages and posts

All content files are in the folder staticsite/src/assets
The pages and posts are in a simplyfied format called 'markdown' and have the file extension '.md'.
All changes are save automatically, no need to click save.
Don't change the files in other folders, unless you know what you are doing ;)

## Testing locally on the development server

To test changes to pages and posts before uploading them to the internet, run the command `ng serve`. The easiest way to do that is to click on the top button (Explorer) on the left hand side. The navigate into the sub menu called NPM scripts and click on the 'play' triangle button to the right of the menu item 'start'. Your project will e built and after a few minutes your can naigate to `http://localhost:4200/` to view your changes.

Once the build process is started it will keep on running and on evry change to the pages, it will rebuilt the site automatically. You don't even need to refresh the browser as it will refresh automatically on every page or post change.

## Uploading the changes

When you are happy with the changes, you can send them to Github for publication. Click on the third button (Source control) of the vertical left-hand side menu. Type a short message about your changes and click the 'Commit' button. This will 'commit' your code LOCALLY only. You have to click the 'Sync' button to send it to Github. It takes about 3-5 minutes before your changes are published.
