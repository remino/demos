jeksite
=======

Plain and simple [Jekyll](https://jekyllrb.com) site template ideal for [GitHub Pages](https://pages.github.com).

Also good for a quick-and-dirty sandbox static site similar to using [CodePen](https://codepen.io).

- [Usage](#usage)
	- [Clone this repo locally and use it as a template](#clone-this-repo-locally-and-use-it-as-a-template)
	- [Use this repo as a template on GitHub](#use-this-repo-as-a-template-on-github)
	- [Install using Homebrew and generate a new site](#install-using-homebrew-and-generate-a-new-site)
- [Help](#help)
- [To Do](#to-do)

## Usage

There are a few ways to use _jeksite_:

### Clone this repo locally and use it as a template

```sh
git clone https://github.com/remino/jeksite.git newsite
cd newsite
asdf install # if you use asdf
bundle install
git remote set-url origin <url of your repo> # if you want to push to a new repo
./jeksite # serve site using jekyll
```

### Use this repo as a template on GitHub

https://github.com/remino/jeksite/generate

### Install using Homebrew and generate a new site

This requires [Homebrew](https://brew.sh) and works on macOS (and possibly Linux) only.

```sh
brew tap remino/remino
brew install jeksite
jeksite new newsite
cd newsite
./jeksite
```

## Help

See `./jeksite -h` for more information on the command.

## To Do

- [ ] Ensure `Gemfile` is using `github-pages` if the site is for GitHub Pages. If not, use plain `jekyll`.
- [ ] Update `_config.yml`, notable `baseurl`, `domain`, `url`, `title`, and `description`.
- [ ] Update `README.md` by first deleting its content.
- [ ] Update or remove `LICENSE.txt` if needed. (ISC licence by default.)
- [ ] Delete content of `index.html`, `style.css`, and `script.js`.
