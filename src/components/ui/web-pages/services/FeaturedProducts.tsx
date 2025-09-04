import React from 'react';
import { Card } from 'antd';
import Image from 'next/image';
const { Meta } = Card;

const FeaturedProducts = () => {
  return (
    <div className="text-center py-12 bg-gray-50">
      <h2 className="text-3xl font-semibold mb-6">Our Featured Products</h2>
      <p className="text-lg text-gray-600 mb-10">Smart, scalable and user-friendly solutions designed to transform your business.</p>
      
      <div className="flex justify-center gap-8">
        {/* Human Resource Management (HRM) */}
        <Card
          hoverable
          className="w-80 shadow-lg"
          cover={<Image alt="HRM" src="your-image-link-1.jpg"  width={600} height={400}/>}
        >
          <Meta title="Human Resource Management (HRM)" />
        </Card>

        {/* Point of Sale (POS) */}
        <Card
          hoverable
          className="w-80 shadow-lg"
          cover={<Image alt="POS" src="your-image-link-2.jpg"  width={600} height={400} />}
        >
          <Meta title="Point of Sale Machine (POS)" />
        </Card>

        {/* Betopia ERP */}
        <Card
          hoverable
          className="w-80 shadow-lg"
          cover={<Image alt="ERP" src="your-image-link-3.jpg" />}
        >
          <Meta title="Betopia ERP" />
        </Card>
      </div>
    </div>
  );
};

export default FeaturedProducts;