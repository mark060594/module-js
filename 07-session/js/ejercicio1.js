/*
 Práctica:
   - obtener los productos de tipo chips en un arreglo DANI
   - obtener los productos de tipo drink en un arreglo DANI
   - obtener todos los productos < a $50
    - obtener >= $50 MORA
   - obtener el inventario total en valor de todos los productos MARuito
   - obtener el inventario total en valor de los productos tipo chips AURO
   - obtener el inventario total en valor de los productos tipo drink
*/





const cartShoppings = [
    {
        name: 'Coca lata 355ml',
        description: 'Coca lata 355ml',
        price: 11,
        type: 'drink'
    },
    {
        name: 'Boing Mango 500ml',
        description: 'Boing Mango 500ml',
        price: 10,
        type: 'drink'
    },
    {
        name: 'Boing Mango 1lt',
        description: 'Boing Mango 1lt',
        price: 18,
        type: 'drink'
    },
    {
        name: 'Coca-Cola 3lt No Retornable',
        description: 'Coca-Cola 3lt No Retornable',
        price: 40,
        type: 'drink'
    },
    {
        name: 'Coca-Cola 600ml',
        description: 'Coca-Cola 600ml',
        price: 14,
        type: 'drink'
    },
    {
      name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
      description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Donas Bimbo Azucaradas 105 g\t',
      price: 27.5,
      type: 'chip'
    },
    {
      name: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
      description: 'Donitas Bimbo Espolvoreadas 105 g + Pan Dulce Nito Con Chocolate 62 g\t\n',
      price: 25.5,
      type: 'chip'
    },
    {
      name: 'Botanas Chips Papas Jalapeño 100 g',
      description: 'Botanas Chips Papas Jalapeño 100 g',
      price: 29.7,
      type: 'chip'
    },
    {
      name: 'Botana Paketaxo Quexo 215 g',
      description: 'Botana Paketaxo Quexo 215 g',
      price: 52.8,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Incógnita 64 g',
      description: 'Botana Doritos Incógnita 64 g',
      price: 18.15,
      type: 'chip'
    },
    {
      name: 'Botana Fritos Sal y Limón 57 g',
      description: 'Botana Fritos Sal y Limón 57 g',
      price: 15.4,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Nacho 58 g',
      description: 'Botana Doritos Nacho 58 g',
      price: 17.6,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Flamin Hot 62 g',
      description: 'Botana Doritos Flamin Hot 62 g',
      price: 17.6,
      type: 'chip'
    },
    {
      name: 'Botanas Chips Papas Fuego Limón 100 g',
      price: 29.7,
      type: 'chip'
    },
    {
      name: 'Papas Sabritas Original 42 g',
      description: 'Papas Sabritas Original 42 g',
      price: 17.6,
      type: 'chip'
    },
    {
      name: 'Papas Sabritas Adobadas 42 g',
      description: 'Papas Sabritas Adobadas 42 g',
      price: 16.5,
      type: 'chip'
    },
    {
      name: 'Cacahuates Hot Nuts Multintenso 50 g',
      description: 'Cacahuates Hot Nuts Multintenso 50 g',
      price: 11,
      type: 'chip'
    },
    {
      name: 'Botana Fritos Chorizo Chipotle 57 g',
      description: 'Botana Fritos Chorizo Chipotle 57 g',
      price: 15.95,
      type: 'chip'
    },
    {
      name: 'Botana Chips Sal de Mar Bolsa 170 g',
      description: 'Botana Chips Sal de Mar Bolsa 170 g',
      price: 49.5,
      type: 'chip'
    },
    {
      name: 'Botana Cheetos Poffs 100 g',
      description: 'Botana Cheetos Poffs 100 g',
      price: 34.1,
      type: 'chip'
    },
    {
      name: 'Papas Fritas Stax Cheddar 156 g',
      description: 'Papas Fritas Stax Cheddar 156 g',
      price: 47.85,
      type: 'chip'
    },
    {
      name: 'Papas Sabritas Original 240 g',
      description: 'Papas Sabritas Original 240 g',
      price: 75.35,
      type: 'chip'
    },
    {
      name: 'Botana Doritos Nacho 370 g',
      description: 'Botana Doritos Nacho 370 g',
      price: 82.5,
      type: 'chip'
    },
    {
      name: 'Chicharrón de Cerdo Sabritas 115 g',
      description: 'Chicharrón de Cerdo Sabritas 115 g',
      price: 55,
      type: 'chip'
    },
    {
      name: 'Botana Cheetos Torciditos 150 g',
      description: 'Botana Cheetos Torciditos 150 g',
      price: 34.1,
      type: 'chip'
    },
    {
      name: 'Papas Ruffles Queso 290 G',
      description: 'Papas Ruffles Queso 290 G',
      price: 71.5,
      type: 'chip'
    },
    {
      name: 'Dip Tostitos Queso Suave 255 g',
      description: 'Dip Tostitos Queso Suave 255 g',
      price: 69.3,
      type: 'chip'
    }
  ]



  
  


  
const productType = (cartShoppings,busqueda)=>{
    const articulos =[];
    cartShoppings.forEach((item) => {
      if(item.type === busqueda){
        articulos.push(item)
      }
    });
    console.log(articulos)
    return articulos;
    //logica de codigo
  }
  
  const TotalDrink = (cartShoppings) => {
    const drinkprice=[];
    let resultado = 0;
    cartShoppings.forEach((item) => {
      if(item.type==="drink"){
        resultado += item.price;
      }
    });
    console.log(`El resultado de la suma de las bebidas es: ${resultado}`)
    return resultado;
  }
  
  
  
  
    //logica de codigo
    
    const totalInventory =  (products) => {
  
      let totalPrice = 0;
  
          products.forEach((element, index) => {
              
  
              totalPrice += element.price;
          });
  
          return console.log(`El precio del inventario total es ${totalPrice}`);
    }
  
    
  
  
  const productsGreaterThan = (cartShoppings,price)=>{
      const articulos =[];
      cartShoppings.forEach((item) => {
        if(item.price > price){
          articulos.push(item)
        }
      });
      console.log(articulos)
      return articulos;
      //logica de codigo
    }
  
  const productsLessThan = (cartShoppings,price)=>{
      const articulos =[];
      cartShoppings.forEach((item) => {
        if(item.price < price){
          articulos.push(item)
        }
      });
      console.log(articulos)
      return articulos;
      //logica de codigo
    }
  
  
    const TotalChips = (cartShoppings) => {
      const chipsPrice=[];
      let resultado=0;
      cartShoppings.forEach((item) => {
        if(item.type==="chip"){
          resultado += item.price;
        }
      });
      console.log(`El resultado de la suma de las chips es: ${resultado}`)
      return resultado;
      
    }
  
  
  
  // LLAMADA A FUNCIONES 
  
   productType(cartShoppings, "drink");
   productsGreaterThan(cartShoppings,50);
   productsLessThan(cartShoppings,50);
   totalInventory(cartShoppings)
   TotalChips(cartShoppings)
   TotalDrink(cartShoppings)
  