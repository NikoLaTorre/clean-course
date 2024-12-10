(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {
        getProduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
    }

    class ClientService {
        sendEmail( emailList: string[] ) {
            console.log('Enviando correo a los clientes');
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private clientService: ClientService;

        constructor( productService: ProductService, clientService: ClientService ) {
            this.productService = productService
            this.clientService = clientService
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.clientService.sendEmail(['fernando@gmail.com', 'jorge@gmail.com']);
        }
    
    }

    class CartBloc {
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }
    
    const productService = new ProductService();
    const clientService = new ClientService();

    const productBloc = new ProductBloc(productService, clientService);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);








})();