"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

// Function to get random year between 2009 and 2021
const getRandomYear = () => {
  const min = 2013;  // Bitcoin's inception
  const max = 2021;  // Recent enough for reliable data
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function CryptoFacts() {
  const [bitcoinData, setBitcoinData] = useState<{
    current: number | null;
    historical: number | null;
    year: number;
  }>({
    current: null,
    historical: null,
    year: getRandomYear()
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        // Get current price from Coinbase
        const currentResponse = await fetch('https://api.coinbase.com/v2/prices/BTC-USD/spot');
        if (!currentResponse.ok) throw new Error('Failed to fetch current price');
        const currentData = await currentResponse.json();
        
        // Get historical price from Coinbase using January 1st of random year
        const historicalDate = `${bitcoinData.year}-01-01`;
        const historicalResponse = await fetch(
          `https://api.coinbase.com/v2/prices/BTC-USD/spot?date=${historicalDate}`
        );
        if (!historicalResponse.ok) throw new Error('Failed to fetch historical price');
        const historicalData = await historicalResponse.json();

        setBitcoinData(prev => ({
          ...prev,
          current: parseFloat(currentData.data.amount),
          historical: parseFloat(historicalData.data.amount)
        }));
        setError(null);
      } catch (err) {
        console.error('Error fetching Bitcoin data:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchBitcoinData();
    
    // Refresh price every minute
    const interval = setInterval(fetchBitcoinData, 60000);
    return () => clearInterval(interval);
  }, [bitcoinData.year]);

  if (loading) {
    return (
      <div className="flex justify-center py-4">
        <Loader2 className="w-4 h-4 animate-spin text-neutral-400" />
      </div>
    );
  }

  if (error || !bitcoinData.current || !bitcoinData.historical) {
    return (
      <p className="text-sm text-red-400">
        Unable to load Bitcoin data: {error}
      </p>
    );
  }

  const INITIAL_INVESTMENT = 1000;
  const btcAmount = INITIAL_INVESTMENT / bitcoinData.historical;
  const currentValue = btcAmount * bitcoinData.current;

  return (
    <div className="space-y-2">
      <h3 className="text-neutral-200 font-medium">Bitcoin Investment Facts</h3>
      <blockquote className="text-sm text-neutral-400">
        Did you know that ${INITIAL_INVESTMENT} invested in Bitcoin in {bitcoinData.year} (${Math.round(bitcoinData.historical).toLocaleString()}/BTC) 
        would be worth ${Math.round(currentValue).toLocaleString()} today?
      </blockquote>
    </div>
  );
} 