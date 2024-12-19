```javascript
// Assuming you have a MongoDB collection named 'users'

db.users.aggregate([
  {
    $lookup: {
      from: 'products',
      localField: 'userId',
      foreignField: 'userId',
      as: 'purchasedProducts'
    }
  },
  {
    $unwind: '$purchasedProducts' // This can cause errors if a user hasn't purchased anything
  }
])
```