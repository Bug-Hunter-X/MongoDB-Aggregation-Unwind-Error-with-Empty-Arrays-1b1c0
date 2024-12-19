```javascript
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
    $addFields: {
      purchasedProducts: { $ifNull: ['$purchasedProducts', []] }
    }
  },
  {
    $unwind: '$purchasedProducts' 
  }
])
```