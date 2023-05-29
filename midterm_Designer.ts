


interface Designer {

    Designing_Tools(): void;
    Export_Property(): void;
    Industry_Partners(): void;
    Unique_Features(): void;
    External_extensions(): void;
    Business_partners(): void;
    Collaboration(): void;
    Ecommerce_space(): void;
    Social_media(): void;
    legal_matters(): void;

  }
  
  class Main_Features implements Designer {

    brandName: string;
    feature: string;
    user: string;
    seller: string;
    retailers: string;
    function_: string;
    cost: number;
    quantity: number;
    product: string;
    quality: string;
    collaborator: string;
  
    constructor(

      brandName: string,
      feature: string,
      user: string,
      seller: string,
      retailers: string,
      function_: string,
      cost: number,
      quantity: number,
      product: string,
      quality: string,
      collaborator: string

    ) {

      this.brandName = brandName;
      this.feature = feature;
      this.user = user;
      this.seller = seller;
      this.retailers = retailers;
      this.function_ = function_;
      this.quantity = quantity;
      this.cost = cost;
      this.product = product;
      this.quality = quality;
      this.collaborator = collaborator;

    }
  
    Designing_Tools(): void {

      console.log(`${this.brandName} has a variety of tools designated for a specific item.`);

    }
  
    Export_Property(): void {

      console.log(`${this.user} selects to export ${this.product}.`);

    }
  
    Industry_Partners(): void {

      console.log(`These are the list of industries for ${this.brandName}.`);

    }
  
    Unique_Features(): void {

      console.log(`${this.brandName} has a list of unique features on its own.`);

    }
  
    External_extensions(): void {

      console.log(`These are the list of eligible external extensions for ${this.brandName}.`);

    }
  
    Business_partners(): void {

      console.log(`${this.user} selects their own partnership with ${this.retailers}.`);

    }
  
    Collaboration(): void {

      console.log(`${this.user} wants to collaborate with ${this.collaborator}.`);

    }
  
    Ecommerce_space(): void {

      console.log(`${this.user} can display desired items and ${this.cost} items: choice to buy/sell with ${this.quantity} quantities.`);

    }
  
    Social_media(): void {

      console.log(`${this.user} selects a way to market ${this.product}.`);

    }
  
    legal_matters(): void {

      console.log(`${this.user} verified partnerships.`);

    }

  }





  //-------------------------------------------------------------------------------



  
  class Fashion_Design extends Main_Features {

    private clothing: string;
    private bags: string;
    private accessories: string;
    private shoes: string;
  
    constructor(

      brandName: string,
      feature: string,
      user: string,
      seller: string,
      retailers: string,
      function_: string,
      cost: number,
      quantity: number,
      product: string,
      quality: string,
      collaborator: string,
      clothing: string,
      bags: string,
      accessories: string,
      shoes: string

    ) {

      super(
        brandName,
        feature,
        user,
        seller,
        retailers,
        function_,
        cost,
        quantity,
        product,
        quality,
        collaborator
      );

      
      this.clothing = clothing;
      this.bags = bags;
      this.accessories = accessories;
      this.shoes = shoes;
    }
  
    Designing_Tools(): void {
      super.Designing_Tools();
      console.log(
        `In addition to the generic tools, ${this.brandName} fashion design includes tools for clothing, bags, accessories, and shoes.`
      );
    }
  
    Designing_Tools(toolCategory: string): void {
      console.log(`Designing tools for ${toolCategory}:`);
      if (toolCategory === "clothing") {
        console.log("Sewing machine, Mannequin, Measuring tape, Scissors, Thread");
      } else if (toolCategory === "bags") {
        console.log("Sketchbook, Computer-Aided Design software, Leatherworking tools");
      } else if (toolCategory === "accessories") {
        console.log("Jewelry pliers, Wire cutters, Beading mat, Jewelry glue");
      } else if (toolCategory === "shoes") {
        console.log("Lasts, Shoe patterns, Shoe knife, Shoe glue");
      } else {
        console.log("Invalid tool category");
      }
    }
  }
  
  class Structural_Design extends Main_Features {
    private structure: string;
    private materials: string;
  
    constructor(
      brandName: string,
      feature: string,
      user: string,
      seller: string,
      retailers: string,
      function_: string,
      cost: number,
      quantity: number,
      product: string,
      quality: string,
      collaborator: string,
      structure: string,
      materials: string
    ) {
      super(
        brandName,
        feature,
        user,
        seller,
        retailers,
        function_,
        cost,
        quantity,
        product,
        quality,
        collaborator
      );
      this.structure = structure;
      this.materials = materials;
    }
  
    Export_Property(): void {
      if (this.user === "agree") {
        console.log(`${this.user} selects to export ${this.product}`);
      } else {
        console.log(`${this.user} disagrees to export ${this.product}`);
      }
  
      console.log(`Additional logic for Export_Property() in Structural_Design`);
    }
  }
  
  // Usage examples
  const fashionBrand = new Fashion_Design(
    "MyFashionBrand",
    "Trendy designs",
    "User123",
    "MySeller",
    "Retailer456",
    "Design and manufacture clothing",
    50,
    100,
    "T-shirts",
    "High quality",
    "CollaboratorXYZ",
    "Clothing",
    "Bags",
    "Accessories",
    "Shoes"
  );
  
  const structuralBrand = new Structural_Design(
    "MyStructuralBrand",
    "Unique architectural designs",
    "User456",
    "MySeller",
    "Retailer789",
    "Design and construct buildings",
    500,
    10,
    "Houses",
    "Durable materials",
    "CollaboratorABC",
    "Residential",
    "Concrete, Steel, Glass"
  );
  
  fashionBrand.Designing_Tools();
  fashionBrand.Designing_Tools("clothing");
  fashionBrand.Designing_Tools("bags");
  fashionBrand.Designing_Tools("accessories");
  fashionBrand.Designing_Tools("shoes");
  
  structuralBrand.Export_Property();
  