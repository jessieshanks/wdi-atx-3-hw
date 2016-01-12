def make_change(cents)
  currency = {
    coins: ["quarters", "dimes", "nickels", "pennies"],
    values: [25, 10, 5, 1],
  };
  change_combination = {};
  for i in 0..3
    if (cents/currency.values[i]>1)
      change_combination[currency.coins[i]=>(cents/currency.values[i])];
      cents=cents%currency.values[i];
    end
  end
  change_combination
end

make_change(1234);
