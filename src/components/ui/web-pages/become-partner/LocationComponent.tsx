import { Form, Input, Row, Col } from 'antd';
import React from 'react';

const LocationComponent = () => { 
      const [form] = Form.useForm();

    return (
        <div>
            <Form form={form}  layout="vertical">
                <Form.Item
                    name="address" 
                    label="Address"
                    initialValue={{ line1: '', line2: '', city: '', zip: '' }} 
                >
                    <Row gutter={16} className='gap-3'>
                       
                        <Col span={24}>
                            <Form.Item
                                name={['address', 'line1']} 
                                noStyle
                            >
                                <Input placeholder="Address line 1" style={{ height:40}} />
                            </Form.Item>
                        </Col>

                        
                        <Col span={24}>
                            <Form.Item
                                name={['address', 'line2']} 
                                noStyle
                            >
                                <Input placeholder="Address line 2" style={{ height:40}} />
                            </Form.Item>
                        </Col>

                       
                        <Col span={24}>
                            <Form.Item
                                name={['address', 'city']} 
                                noStyle
                            >
                                <Input placeholder="City" style={{ height:40}} />
                            </Form.Item>
                        </Col>

                        {/* Zip */}
                        <Col span={24}>
                            <Form.Item
                                name={['address', 'zip']} 
                                noStyle
                            >
                                <Input placeholder="Zip" style={{ height:40}} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LocationComponent;