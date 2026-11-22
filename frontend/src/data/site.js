export const site = {
  name: 'Botanical Beauty',
  tagline: 'Beauty, naturally.',
  description: 'Thoughtfully selected beauty essentials and professional treatments to make self-care feel special.',
  phone: '+254 791 002 178',
  email: 'winstoneonyango76@gmail.com',
  location: 'Nairobi, Kenya',
  instagram: 'https://instagram.com/',
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '254700000000',
}

export const fallbackCategories = [
  { name: 'Skincare', slug: 'skincare', description: 'Everyday essentials for your skincare routine.', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700' },
  { name: 'Makeup', slug: 'makeup', description: 'Beauty essentials for every occasion.', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=700' },
  { name: 'Hair products', slug: 'hair-products', description: 'Care and styling essentials for your hair.', image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=700' },
  { name: 'Perfumes', slug: 'perfumes', description: 'Fragrances to complement your style.', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=700' },
  { name: 'Body care', slug: 'body-care', description: 'Little rituals for everyday body care.', image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=700' },
  { name: 'Nail products', slug: 'nail-products', description: 'Colour and care for your nails.', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=700' },
  { name: 'Beauty accessories', slug: 'beauty-accessories', description: 'Useful finishing touches for your routine.', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=700' },
]

export const fallbackProducts = [
  { id: 1, name: 'Botanical Hydration Serum', slug: 'botanical-hydration-serum', brand: 'Botanical Beauty', category_name: 'Skincare', description: 'A lightweight serum for a refreshing skincare routine.', size: '30ml', image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900', is_featured: true },
  { id: 2, name: 'Daily Glow Moisturizer', slug: 'daily-glow-moisturizer', brand: 'Botanical Beauty', category_name: 'Skincare', description: 'A daily moisturizing step for soft, comfortable-feeling skin.', size: '50ml', image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=900', is_featured: true },
  { id: 3, name: 'Everyday Makeup Edit', slug: 'everyday-makeup-edit', brand: 'Beauty Edit', category_name: 'Makeup', description: 'A considered collection of everyday makeup essentials.', size: 'Set', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900', is_featured: true },
  { id: 4, name: 'Signature Fragrance', slug: 'signature-fragrance', brand: 'Scent Studio', category_name: 'Perfumes', description: 'A fragrance selection for your personal style.', size: '50ml', image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=900', is_featured: true },
]

export const fallbackServices = [
  { name: 'Makeup', slug: 'makeup', description: 'Makeup for everyday moments, celebrations and special occasions.', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900', duration: 'By appointment' },
  { name: 'Facials', slug: 'facials', description: 'Relaxing facial treatments tailored to your skincare needs.', image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900', duration: 'Ask for availability' },
  { name: 'Nail care', slug: 'nail-care', description: 'Manicure, pedicure and nail styling services.', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900', duration: 'By appointment' },
  { name: 'Hair styling', slug: 'hair-styling', description: 'Styling for your everyday look and special occasions.', image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=900', duration: 'By appointment' },
  { name: 'Lashes & brows', slug: 'lashes-brows', description: 'Lash and brow services to complete your look.', image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=900', duration: 'Ask for availability' },
]
