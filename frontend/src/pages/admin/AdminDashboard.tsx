import { useState } from 'react';
import { Package, ShoppingCart, TrendingUp, Users, Search, Plus, Edit2, Trash } from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'orders'>('overview');

  const stats = [
    { label: 'Total Revenue', value: '12,450 TND', icon: TrendingUp, trend: '+14%' },
    { label: 'Active Orders', value: '45', icon: ShoppingCart, trend: '+5%' },
    { label: 'Products', value: '28', icon: Package, trend: '0%' },
    { label: 'Customers', value: '890', icon: Users, trend: '+12%' },
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'Youssef Ben Ali', date: 'Today, 14:30', total: '150.00 TND', status: 'Pending' },
    { id: '#ORD-002', customer: 'Amina Trabelsi', date: 'Today, 11:15', total: '85.00 TND', status: 'Processing' },
    { id: '#ORD-003', customer: 'Karim Z.', date: 'Yesterday, 16:45', total: '210.00 TND', status: 'Delivered' },
  ];

  const products = [
    { id: '1', name: 'Artisanal Kaak Warka', category: 'Kaak', stock: 15, price: '45.00 TND' },
    { id: '2', name: 'Royal Samsa Pistachio', category: 'Samsa', stock: 8, price: '55.00 TND' },
    { id: '3', name: 'Golden Mlabes', category: 'Mlabes', stock: 24, price: '60.00 TND' },
    { id: '4', name: 'Royal Pignon Baklava', category: 'Baklava', stock: 5, price: '75.00 TND' },
  ];

  const TabButton = ({ id, label }: { id: string, label: string }) => (
    <button
      onClick={() => setActiveTab(id as any)}
      className={`px-4 py-3 font-medium text-sm transition-colors border-b-2 ${activeTab === id ? 'border-gold-600 text-gold-700' : 'border-transparent text-dark-light hover:text-dark'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="pt-20 min-h-screen bg-cream-50 font-sans">

      {/* Admin Header */}
      <div className="bg-white border-b border-cream-200 sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 gap-4">
            <div>
              <h1 className="font-serif text-2xl text-dark">Store Administration</h1>
              <p className="text-sm text-dark-light">Manage your BDI SWEETS digital boutique.</p>
            </div>
            <div className="flex bg-cream-100 rounded-sm overflow-hidden p-1">
              <input type="text" placeholder="Search orders, products..." className="bg-transparent border-none px-4 text-sm focus:outline-none w-64" />
              <button className="p-2 text-dark hover:text-gold-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex gap-4 mt-2">
            <TabButton id="overview" label="Overview" />
            <TabButton id="orders" label="Orders" />
            <TabButton id="products" label="Products" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-8">

        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-sm shadow-sm border border-cream-200 relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold-50 rounded-full group-hover:bg-gold-100 transition-colors" />
                  <div className="relative">
                    <div className="flex justify-between items-start mb-4">
                      <p className="text-sm font-medium text-dark-light uppercase tracking-wide">{stat.label}</p>
                      <stat.icon className="w-5 h-5 text-gold-600" />
                    </div>
                    <div className="flex items-end gap-3">
                      <h3 className="text-3xl font-serif text-dark">{stat.value}</h3>
                      <span className={`text-sm font-medium mb-1 ${stat.trend.startsWith('+') ? 'text-green-600' : 'text-dark-light'}`}>{stat.trend}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Orders Widget */}
              <div className="bg-white rounded-sm shadow-sm border border-cream-200">
                <div className="p-6 border-b border-cream-200 flex justify-between items-center bg-cream-50/50">
                  <h3 className="font-serif text-xl pl-2 border-l-4 border-gold-600">Recent Orders</h3>
                  <button onClick={() => setActiveTab('orders')} className="text-sm text-gold-700 hover:text-gold-800 font-medium">View All</button>
                </div>
                <div className="divide-y divide-cream-100">
                  {recentOrders.map((order, i) => (
                    <div key={i} className="p-4 flex items-center justify-between hover:bg-cream-50 transition-colors">
                      <div>
                        <p className="font-medium text-dark">{order.id} - {order.customer}</p>
                        <p className="text-xs text-dark-light mt-1">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-dark">{order.total}</p>
                        <span className={`inline-block mt-1 text-xs px-2 py-1 rounded-sm uppercase tracking-wider ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                              'bg-green-100 text-green-800'
                          }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inventory Alerts Widget */}
              <div className="bg-white rounded-sm shadow-sm border border-cream-200">
                <div className="p-6 border-b border-cream-200 bg-cream-50/50">
                  <h3 className="font-serif text-xl pl-2 border-l-4 border-red-600">Low Stock Alerts</h3>
                </div>
                <div className="p-6 flex flex-col items-center justify-center h-64 text-center">
                  <Package className="w-12 h-12 text-cream-300 mb-4" />
                  <p className="text-dark-light">Inventory levels are healthy.</p>
                  <p className="text-sm text-cream-400 mt-2">All products are above 5 kg stock limit.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="bg-white rounded-sm shadow-sm border border-cream-200">
            <div className="p-6 border-b border-cream-200 flex justify-between items-center bg-cream-50/50">
              <h3 className="font-serif text-xl text-dark">Product Catalog</h3>
              <button className="btn-primary py-2 px-4 shadow-sm flex gap-2 items-center"><Plus className="w-4 h-4" /> Add Product</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-cream-50 text-dark-light uppercase text-xs tracking-wider border-b border-cream-200">
                    <th className="p-4 font-medium">Product Name</th>
                    <th className="p-4 font-medium">Category</th>
                    <th className="p-4 font-medium">Stock (kg)</th>
                    <th className="p-4 font-medium">Price / kg</th>
                    <th className="p-4 font-medium relative">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cream-100">
                  {products.map(product => (
                    <tr key={product.id} className="hover:bg-cream-50 transition-colors">
                      <td className="p-4 font-medium text-dark">{product.name}</td>
                      <td className="p-4 text-dark-light">{product.category}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-sm text-xs font-medium ${product.stock < 10 ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'}`}>
                          {product.stock}
                        </span>
                      </td>
                      <td className="p-4 text-dark-light">{product.price}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <button className="text-dark-light hover:text-gold-600 transition-colors"><Edit2 className="w-4 h-4" /></button>
                          <button className="text-dark-light hover:text-red-600 transition-colors"><Trash className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="bg-white rounded-sm shadow-sm border border-cream-200 flex items-center justify-center h-96">
            <div className="text-center">
              <ShoppingCart className="w-16 h-16 text-cream-300 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-dark mb-2">Orders Management</h3>
              <p className="text-dark-light max-w-sm">Full order filtering and processing capabilities will be available when connected to the live NestJS backend.</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
