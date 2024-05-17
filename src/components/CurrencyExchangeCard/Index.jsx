import React, { useState } from "react";
import { Card } from "../Card";
import { useLazyGetConvertedCoinsDataQuery } from "../../service/services";
import { coinsId } from "../../utils/helper";
import SelectComponent from "../Select";
import Button from "../Button";
import Input from "../Input";
import { Text } from "../Text";
import { portfolioData } from "../../utils/helper";
import { DropDownIcon } from "../icons/DropDownIcon";
export const CurrencyExchangeCard = () => {
  const [fromValue, setFromValue] = useState(1);
  const [fromCoinId, setFromCoinId] = useState(coinsId[0]);
  const [toCoinId, setToCoinId] = useState(coinsId[1]);

  const [trigger, { isFetching, isLoading, isSucess, isError, data }] =
    useLazyGetConvertedCoinsDataQuery();

  console.log("data from service>>", data);
  console.log("Error>>", isError);
  return (
    <Card
      size="xl"
      className={"flex flex-col items-center justify-center gap-6 "}
    >
      <div className="flex w-full pl-1">
        <Text size="md" className="font-bold text-gray-700">
        Exchange Coin
        </Text>
        
      </div>
      <div className="flex items-center justify-between gap-2">
        <span className="text-red-500">Sell</span>
        <SelectComponent
          options={coinsId}
          value={fromCoinId}
          onChange={(e) => setFromCoinId(e)}
          variant="fill"
          color="gray"
          size="md"
          indicator={<DropDownIcon/>}
        />
        <Input
          options={coinsId}
          value={fromValue}
          onChange={(e) => setFromValue(e.target.value)}
          variant="outline"
          color="gray"
          size="sm"
          className={"self-grow rounded-md"}
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <span className="text-green-500">Buy</span>
        <div>
          <SelectComponent
            options={coinsId}
            value={toCoinId}
            onChange={(e) => setToCoinId(e)}
            variant="fill"
            color="gray"
            size="md"
          />
        </div>
        <div className="min-w-10 min-h-4 w-[200px] h-5">
          <Text className="pl-1 text-green-500">{data}</Text>
        </div>
      </div>
      <div>
        <Button
          variant="fill"
          color="blue"
          size="md"
          onClick={() =>
            trigger({
              fromCoinId: fromCoinId.id,
              toCoinId: toCoinId.id,
              fromValue: fromValue,
            })
          }
          type="button"
        >
          Exchange
        </Button>
      </div>
    </Card>
  );
};
