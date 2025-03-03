import { Request, Response } from "express";
import path from 'path';
import { createMenuObject } from '../helpers/createMenuObject'
import { Pet } from "../models/pet";

export const home = (req: Request, res: Response) => {

  let list = Pet.getAll()

  res.render('pages/page', {
    menu: createMenuObject("all"),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    },
    list: list
  })
}

export const dogs = (req: Request, res: Response) => {
  let list = Pet.getFromType("dog")
  res.render('pages/page', {
    menu: createMenuObject("dog"),
    banner: {
      title: 'Todos os Cachorros disponiveis',
      background: 'banner_dog.jpg'
    },
    list
  })
}

export const cats = (req: Request, res: Response) => {
  let list = Pet.getFromType("cat")

  res.render('pages/page', {
    menu: createMenuObject("cat"),
    banner: {
      title: 'Todos os Gatos disponiveis',
      background: 'banner_cat.jpg'
    },
    list
  })
}

export const fishes = (req: Request, res: Response) => {
  let list = Pet.getFromType("fish")

  res.render('pages/page', {
    menu: createMenuObject("fish"),
    banner: {
      title: 'Todos os Peixes disponiveis',
      background: 'banner_fish.jpg'
    },
    list
  })
}
