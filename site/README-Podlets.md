# Episodes

Episodes are a custom [collection](https://jekyllrb.com/docs/collections/) defined for the Podlets site.

* All episodes are stored in `/_episodes` as a markdown (`.md`) file.
* To keep them sorted in order, prefix the episode with the Episode number (e.g, `001-*.md`). This formatting will allow the "latest episodes" container on the home page to display the episodes in reverse chronological order, and the episodes to show in chronological order on the Episodes page.

## Episode Front Matter

Each episode's `.md` file contains [Front Matter](https://jekyllrb.com/docs/front-matter/) for configuration in YAML format. This content appears between the `---` on each episode file.
Note that any colons (`:`) in the Front Matter will need to be escaped by wrapping in single quotes, or replaced with another character.

* `episode_id` - the ID for the episode. Utilized to reference specific episodes from other pages or episodes, and to launch the inline iframe player. 
* `episode_number` - the number that appears on the front-end to users above the title (eg, `Episode 1`)
* `title` - the episode name. Appears on the episode card and episode detail page.
* `description` - the episode's description. Appears on the episode card and the episode detail page.
* `notes` - the episode shownotes. Appears on the episode detail page.
* `video` - YouTube embed link for the episode.
* `related` - Allows authors to specify a related episode to appear on the episode's detail page's sidebar. Supports one or more related episodes. Must refer to the related episode's `episode_id`. 
  * For multiple related episodes, format the list in the following manner:
    ```
    related:
    - 002-container-orchestration
    - 003-episode-name
    - 004-episode-name
    ```


## Episode Transcript

For the episode's transcript, which appears at length on the Episode detail page, paste the transcript below the episode's front matter, under the `---`.

This is markdown format supported and will convert markdown tags into html upon compilation.

## Latest episodes

The home page will display the 3 latest episodes in reverse chronological order by default, starting with the latest.  To change this number, update the `limit` operator on `index.html`:

` {% for episode in latest limit:3 %} <= limited to 3 currently `

## Highlighted Episodes

The Home and About pages allow authors to set highlighted episodes. The home page will show up to three, but the About page will show as many highlighted episodes the author has specified.

To select Featured episodes,add them to the `highlighted` YML block on `_config.yml`.

# Podcast Hosts

Hosts are a custom collection to contain the show hosts and their biographical information.

Each host is stored as a `.md` file in `/_hosts`.

The order in which the hosts render on the front end is determined by the number specified on each markdown file.

## Host Front Matter

Each host has the following Front Matter:

* `first_name`: Host's first name
* `last_name`:  Host's last name
* `image`: Relative or Absolute Path to the host's profile photo. For best results, use a square image between 100x100 and 500x500.
* `jobtitle`: Job title that appears on the home page and about page next to the host's name.
* `twitter`: URL to host's Twitter profile.
* `linkedin`: URL to host's LinkedIn profile.
* `github`: URL to host's GitHub profile.
* `website`: URL to host's custom url / website. 
* `current`: Boolean which determines if this host is a current host or not. If set to `true`, the host will appear on the home page and about page. if set to False, the host will show under the "Past hosts" section on the about page.


## Host Biography

The biography of the host is in the body of the host's file below the host's front-matter under the `---`.

This is markdown-format supported and will convert markdown tags into html upon compilation.

# Listen & Watch Links

The `Listen and Watch` links that link users to various podcast locations are set in the `_config.yml` file.

Find the `podcast_links` section on `_config.yml`.

* The `Primary` sub-section is for the large icons on the top row. (3-up icons)
* The `Secondary` sub-section is for the smaller icons on the second row (4-up icons)
* The `Tertiary` sub-section is for the list on the right (1-up icons).

Each link in the `podcast_links` section is defined by:

* `icon`: File name. Assumes the file is located in `/img/logos` and is a `.png` file.
* `url`: Destination where the user will end up when they click or tap the icon.
* `alt`: Alt-text for the image for screen-readers, and used to display the blue text on the `Tertiary` podcast links on the right. 

# Footer Social Links

Update the Footer social media links by finding the `footer_social_links` in `_config.yml`. Each footer social link has 3 properties:
```
{Link Name}:
  fa_icon: {font-awesome icon class}
  url: {URL}
```

Update the `url` property to direct users to a destination.