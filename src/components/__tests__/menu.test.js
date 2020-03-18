import React from "react"
import renderer from "react-test-renderer"

import Menu from "../menu"

describe("Menu", () => {
  const emptyMenu = []
  const menuWithItems = [
    {
      name: 'home',
      path: '/'
    },
    {
      name: 'about',
      path: '/about'
    }
  ]
  it("renders empty menu correctly", () => {
    const tree = renderer
      .create(<Menu menuItems={emptyMenu} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders menu with items correctly", () => {
    const tree = renderer
      .create(<Menu menuItems={menuWithItems} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})