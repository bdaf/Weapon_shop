- Adding products:
  Method POST on url:

      localhost:80/api/products

  Patient example in JSON format:

  {
     "name": "Broń",
     "description":"description of gun",
     "price": 50,
     "amount": 1,
     "producer": {
        "companyName": "Comarch",
        "nip": "1234234"
     },
     "category": {
        "name": "Bronie groźne"
     },
     "photoUrl": "url"
  }

	
