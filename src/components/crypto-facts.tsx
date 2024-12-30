"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

const INVESTMENT_YEAR = 2017;
const INITIAL_INVESTMENT = 1000;
const HISTORICAL_DATE = '2017-01-01';

export function CryptoFacts() {
  const [bitcoinData, setBitcoinData] = useState<{
    current: number | null;
    historical: number | null;
  }>({
    current: null,
    historical: null
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
        
        // Get historical price from Coinbase
        const historicalResponse = await fetch(
          `https://api.coinbase.com/v2/prices/BTC-USD/spot?date=${HISTORICAL_DATE}`
        );
        if (!historicalResponse.ok) throw new Error('Failed to fetch historical price');
        const historicalData = await historicalResponse.json();

        setBitcoinData({
          current: parseFloat(currentData.data.amount),
          historical: parseFloat(historicalData.data.amount)
        });
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
  }, []);

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

  const btcAmount = INITIAL_INVESTMENT / bitcoinData.historical;
  const currentValue = btcAmount * bitcoinData.current;

  return (
    <blockquote className="text-sm text-neutral-400">
      "Did you know that ${INITIAL_INVESTMENT} invested in Bitcoin in {INVESTMENT_YEAR} (${Math.round(bitcoinData.historical).toLocaleString()}/BTC) 
      would be worth ${Math.round(currentValue).toLocaleString()} today?"
    </blockquote>
  );
} 