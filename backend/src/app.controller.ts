import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('api')
export class AppController {
  
  @Get('products')
  getProducts() {
    return [
      { id: '1', name: 'Artisanal Kaak Warka', category: 'Kaak', stock: 15, price: 45.00 },
      { id: '2', name: 'Royal Samsa Pistachio', category: 'Samsa', stock: 8, price: 55.00 },
      { id: '3', name: 'Golden Mlabes', category: 'Mlabes', stock: 24, price: 60.00 },
      { id: '4', name: 'Royal Pignon Baklava', category: 'Baklava', stock: 5, price: 75.00 },
    ];
  }

  @Get('orders')
  getOrders() {
    return [
      { id: '#ORD-001', customer: 'Youssef Ben Ali', date: 'Today, 14:30', total: 150.00, status: 'Pending' },
      { id: '#ORD-002', customer: 'Amina Trabelsi', date: 'Today, 11:15', total: 85.00, status: 'Processing' },
      { id: '#ORD-003', customer: 'Karim Z.', date: 'Yesterday, 16:45', total: 210.00, status: 'Delivered' },
    ];
  }

  @Post('orders')
  createOrder(@Body() orderDto: any) {
    return {
      success: true,
      message: 'Order created successfully',
      orderId: `#ORD-${Math.floor(Math.random() * 1000)}`,
      receivedData: orderDto
    };
  }
}
