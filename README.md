# Repository Listing page

## Overview

This page lists public repositories for a specified GitHub user.

## Setup

Cloning this repository:
```
git clone git@github.com:bistaastha/repository-listing.git
```

Switch to project directory:
```
cd repository-listing
```

Installing packages and running the app:
```
npm install
npm start
```
App runs at: http://localhost:4200/

## Assumptions

- The repository build assumes global installation of the following packages:
  - Angular CLI: v13.2.0+
  - Node: v16+
  - npm: v7.24.0
- For the current instance of the app, the data corresponding to [this](https://github.com/andrew) GitHub user is being displayed. This profile has 306 public repositories.
- For each card representing a repository, the maximum languages that can be displayed have been set to 5.
- The GitHub API calls are unauthenticated.
