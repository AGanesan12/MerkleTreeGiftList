# MerkleTreeGiftList

Alchemy University Ethereum Dev. Bootcamp Week 2 Project.

Application which gives out gifts but only to names on the nice list.

## Client

`npm install` to install all dependencies. Opened with LiveServer VSCode extension

Front-end HTML to deploy application.

## Server

Express server hosted on port 3000 which can be run in top-level directory with `node server/index`

Backend JavaScript to describe routes, get data front-end data, and check name.

## Utils

- The `niceList.json` which contains all the names of the people who deserve a gift this year.
- The `MerkleTree.js` a modified merkle tree.
- The `verifyProof.js` verifies whether name is on tree or not.
