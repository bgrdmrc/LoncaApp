import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="products"
          options={{
            title: 'Products',
          }}
        />
        <Stack.Screen
          name="product/[id]"
          options={{
            title: 'Product Details',
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
