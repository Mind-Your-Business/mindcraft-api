// /* global describe beforeEach it */
// const {expect} = require('chai')
// const db = require('../index')
// const Quiz = db.model('quiz')

// let newQuiz
// describe('Quiz model', () => {
//   beforeEach(async function() {
//     await db.sync({force: true})
//     newQuiz = await Quiz.create({
//       name: 'Sample Quiz',
//       description: 'This is a mock quiz',
//       questions: ['Question 1', 'Question 2', 'Question 3'],
//       completedCorrectly: true,
//       correctAnswers: 3,
//       incorrectAnswers: 0
//     })
//   })
// })

// describe('create', () => {
//   it('should create a new quiz and respond with the new object', done => {
//     expect(newQuiz.name).to.equal('Sample Quiz')
//     expect(newQuiz.description).to.equal('This is a mock quiz')
//     expect(newQuiz.questions).to.equal([
//       'Question 1',
//       'Question 2',
//       'Question 3'
//     ])
//     expect(newQuiz.completedCorrectly).to.equal(true)
//     expect(newQuiz.correctAnswers).to.equal(3)
//     expect(newQuiz.incorrectAnswers).to.equal(0)

//     done()
//   })
// })

// //   describe('associations', function() {
// //     describe('belongsToMany realationship between item and order', () => {
// //       it('adds belongsToMany realationship between item and order through LineItem', done => {
// //         Order.create({
// //           status: 'CREATED',
// //           recepientFirstName: 'Stacy',
// //           recepientLastName: 'Satran',
// //           recepientemail: 'stacy@abc.com'
// //         })
// //           .then(order => {
// //             return itemSaved.addOrder(order, {
// //               through: {quantity: 3, price: 2.2}
// //             })
// //           })
// //           .then(() => {
// //             return itemSaved.getOrders()
// //           })
// //           .then(orders => {
// //             expect(orders.length).to.be.equal(1)
// //             expect(orders[0].lineItem.get('quantity')).to.be.equal(3)
// //             expect(orders[0].lineItem.get('price')).to.be.equal('2.20')
// //             done()
// //           })
// //           .catch(err => {
// //             console.log(err)
// //             done(err)
// //           })
// //       })
// //     })
// //   })
// //   // end describe('associations')

// //   describe('instanceMethods', () => {
// //     describe('isAvailable', () => {
// //       let item
// //       let notavailableitem

// //       beforeEach(async () => {
// //         item = await Item.create({
// //           name: `Frosted Flakes`,
// //           price: 4.99,
// //           stock: 50,
// //           description: `They'rrrree GREAT - Tony the Tiger`,
// //           category: ['all', 'classics', 'bestsellers'],
// //           imageUrl:
// //             'https://clickamericana.com/wp-content/uploads/Vintage-Sugar-Frosted-Flakes-cereal-ad-from-1961.webp'
// //         })

// //         notavailableitem = await Item.create({
// //           name: 'General Jets',
// //           price: 3.99,
// //           stock: 0,
// //           description:
// //             'Re-discover that old-fashioned goodness without having to turn on your time machine.',
// //           category: ['all', 'classics', 'the uknowns'],
// //           imageUrl:
// //             'http://shepelavy.com/blog/wp-content/uploads/2011/05/Jets.jpg'
// //         })
// //       })

// //       it('returns true if the item is available', () => {
// //         expect(item.isAvailable()).to.be.equal(true)
// //         expect(notavailableitem.isAvailable()).to.be.equal(false)
// //       })

// //       it('returns false if the item is not-available', () => {
// //         expect(notavailableitem.isAvailable()).to.be.equal(false)
// //       })
// //     }) // end describe('isAvailable')
// //   }) // end describe('instanceMethods')

// //   let firstproduct
// //   let secondproduct
// //   describe('classMethods', () => {
// //     describe('findByCategory', () => {
// //       beforeEach(async () => {
// //         await db.sync({force: true})

// //         firstproduct = await Item.create({
// //           name: 'General Jets',
// //           price: 3.99,
// //           stock: 40,
// //           description:
// //             'Re-discover that old-fashioned goodness without having to turn on your time machine.',
// //           category: ['all', 'classics', 'the uknowns'],
// //           imageUrl:
// //             'http://shepelavy.com/blog/wp-content/uploads/2011/05/Jets.jpg'
// //         })

// //         secondproduct = await Item.create({
// //           name: 'Raisin Bran',
// //           price: 3.99,
// //           stock: 60,
// //           description:
// //             'Have your breakfast and a sweet treat without any of the guilt.',
// //           category: ['all', 'classics'],
// //           imageUrl:
// //             'http://shepelavy.com/blog/wp-content/uploads/2011/05/RaisenBranOrg-480x653.jpg'
// //         })
// //       })

// //       it('returns category of a product', async () => {
// //         let filteredProducts = await Item.findByCategory('all')
// //         expect(filteredProducts.length).to.be.equal(2)
// //         expect(filteredProducts[0].name).to.equal('General Jets')
// //         expect(filteredProducts[1].name).to.equal('Raisin Bran')
// //       })
// //     })

// //     // end describe('findByCategory')
// //     //end Model
// //   })
// //   // end describe('Item model')
// // })
