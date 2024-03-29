import React, { useState, useMemo, useReducer } from "react";
import data from '../../data.json';
import { Container, FilterWrapper } from "../Filter/Filter.style";
import { Header } from "../Header/Header";
import { Options, ProductFinder } from "../../styles/global.style";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import Table from "../Table/Table";
import Footer from "../Footer/Footer";
const intersection = (a: string[], b: string[]) =>
  a.filter((value) => b.includes(value));

const STRATEGIES: string[] = [
  "Thematic",
  "Factors",
  "Equity Income",
  "Capital Strength",
  "Currency Hedge",
  "ESG",
];

const ASSET_CLASSES = {
  'Equity': ["All Cap", "Large Cap", "Small Cap"],
  "Fixed Income": ["Governmental", "Currency"],
};

const REGIONS = {
  Market: {
    "Developed": [],
    "Emerging": []
  },
  Region: {
    "Asia Pacific": [],
    Europe: ["Eurozone", "Germany", "Switzerland", "United Kingdom"],
    "Global": [],
    "North America": ["United States"],
  },
};
const STYLES: string[] = ["Index", "Active"];

const DashboardPage = () => {
  const [search, setSearch] = useState<string>("");
  const [filters, selectOptions] = useReducer<React.Reducer<string[], string>>(
    (state, option) => {
      if (state.includes(option)) {
        return state.filter((value) => value !== option);
      } else {
        return [...state, option];
      }
    },
    []
  );

  const display = useMemo(() => {
    let filtered = data;
    if (search) {
      filtered = data.filter((item) =>
        item.fund_name.toLowerCase().includes(search.toLowerCase())
      );
    }
    const hasStrategy = intersection(filters, STRATEGIES).length > 0;
    if (hasStrategy) {
      filtered = filtered.filter((item) => filters.includes(item.strategy));
    }
    // this will not work because I didn't saw any way to filter this on XD
    const hasAssetClass = intersection(filters, Object.keys(ASSET_CLASSES)).length > 0;
    if (hasAssetClass) {
      filtered = filtered.filter((item) => filters.includes(item.asset_class));
    }
    const getAllRegions = (regions: { [key: string]: any }): string[] => {
      return Object.entries(regions).flatMap(([key, value]) =>
        Array.isArray(value)
          ? [key, ...value]
          : [key, ...getAllRegions(value)]
      );
    };

    const hasRegion = intersection(filters, getAllRegions(REGIONS)).length > 0;
    if (hasRegion) {
      filtered = filtered.filter((item) => filters.includes(item.region));
    }

    const hasStyle = intersection(filters, STYLES).length === 1;
    if (hasStyle) {
      filtered = filtered.filter(
        (item) => item.style === intersection(filters, STYLES)[0]
      );
    }

    return filtered;
  }, [search, filters]);
  return (
    <Container>
      <Header />
      <ProductFinder>
        <h1>Product Finder</h1>
        <Options>
          <Search search={search} setSearch={setSearch} />
          <FilterWrapper>
            <>
              <Filter
                label="Strategy"
                options={STRATEGIES.map((strategy) => ({ label: strategy }))}
                values={filters}
                selectOptions={selectOptions}
              />
              <Filter
                label="Asset Class"
                options={Object.entries(ASSET_CLASSES).map(([category, values]) => ({
                  label: category,
                  children: values.map((value) => ({ label: value })),
                }))}
                values={filters}
                selectOptions={selectOptions}
              />
              <Filter
                label="Market & Region"
                options={Object.entries(REGIONS).map(([category, values]) => ({
                  label: category,
                  children: Array.isArray(values)
                    ? values.map((value) => ({ label: value }))
                    : Object.entries(values).map(([subCategory, subValues]) => ({
                      label: subCategory,
                      children: subValues.map((value) => ({ label: value })),
                    })),
                }))}
                values={filters}
                selectOptions={selectOptions}
              />
              <Filter
                label="Style"
                options={STYLES.map((strategy) => ({ label: strategy }))}
                values={filters}
                selectOptions={selectOptions}
              />
            </>
          </FilterWrapper>
        </Options>
      </ProductFinder>
      <main>
        <Table data={display} />
      </main>
      <Footer />
    </Container>
  );
};

export default DashboardPage;
