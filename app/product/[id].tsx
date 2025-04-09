import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { API_URL } from '@/config/api';

const { width } = Dimensions.get('window');

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  sku: string;
  series: {
    name: string;
    itemQuantity: number;
  };
  images: {
    main: string;
    all: string[];
  };
  details: {
    fabric: string;
    modelMeasurements: string;
    productMeasurements: string;
    sampleSize: string;
  };
}

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setError(null);
        const response = await fetch(`${API_URL}/api/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Failed to load product details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: product.images.main }}
        style={styles.mainImage}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.sku}>SKU: {product.sku}</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Series Information</Text>
          <Text style={styles.sectionText}>Name: {product.series.name}</Text>
          <Text style={styles.sectionText}>Quantity: {product.series.itemQuantity}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Product Details</Text>
          {product.details.fabric && (
            <Text style={styles.sectionText}>Fabric: {product.details.fabric}</Text>
          )}
          {product.details.modelMeasurements && (
            <Text style={styles.sectionText}>Model Measurements: {product.details.modelMeasurements}</Text>
          )}
          {product.details.productMeasurements && (
            <Text style={styles.sectionText}>Product Measurements: {product.details.productMeasurements}</Text>
          )}
          {product.details.sampleSize && (
            <Text style={styles.sectionText}>Sample Size: {product.details.sampleSize}</Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Images</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {product.images.all.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.additionalImage}
                resizeMode="cover"
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  mainImage: {
    width: width,
    height: width,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
  brand: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  sku: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  additionalImage: {
    width: 100,
    height: 100,
    marginRight: 8,
    borderRadius: 8,
  },
}); 