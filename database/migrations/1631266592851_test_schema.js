'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TestSchema extends Schema {
  up () {
    this.create('tests', (table) => {
      table.increments('id')
      table.string('title')
      table.text('body')
      table.timestamps()
    })
  }

  down () {
    this.drop('tests')
  }
}

module.exports = TestSchema
