import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface SearchFilters {
  name?: string;
  location?: string;
  ageRange?: { min: number; max: number };
  relationship?: string;
  verifiedOnly: boolean;
}

interface AdvancedSearchProps {
  onSearch: (filters: SearchFilters) => void;
}

export function AdvancedSearch({ onSearch }: AdvancedSearchProps) {
  const [filters, setFilters] = React.useState<SearchFilters>({
    verifiedOnly: false,
  });

  return (
    <stackLayout style={styles.container}>
      <textField
        hint="Name"
        text={filters.name}
        onTextChange={(args) =>
          setFilters((prev) => ({ ...prev, name: args.value }))
        }
        className="input mb-4"
      />

      <textField
        hint="Location"
        text={filters.location}
        onTextChange={(args) =>
          setFilters((prev) => ({ ...prev, location: args.value }))
        }
        className="input mb-4"
      />

      <gridLayout columns="*, *" className="mb-4">
        <textField
          col={0}
          hint="Min Age"
          keyboardType="number"
          onTextChange={(args) =>
            setFilters((prev) => ({
              ...prev,
              ageRange: {
                ...prev.ageRange,
                min: parseInt(args.value, 10),
              },
            }))
          }
          className="input mr-2"
        />
        <textField
          col={1}
          hint="Max Age"
          keyboardType="number"
          onTextChange={(args) =>
            setFilters((prev) => ({
              ...prev,
              ageRange: {
                ...prev.ageRange,
                max: parseInt(args.value, 10),
              },
            }))
          }
          className="input ml-2"
        />
      </gridLayout>

      <dropDown
        items={[
          "Any Relationship",
          "Parent",
          "Sibling",
          "Child",
          "Cousin",
          "Other",
        ]}
        selectedIndex={0}
        onSelectedIndexChanged={(args) =>
          setFilters((prev) => ({
            ...prev,
            relationship: args.newIndex === 0 ? undefined : args.object.items[args.newIndex],
          }))
        }
        className="mb-4"
      />

      <gridLayout columns="auto, *" className="mb-4">
        <label text="Verified Members Only" col={0} />
        <switch
          col={1}
          checked={filters.verifiedOnly}
          onCheckedChange={(args) =>
            setFilters((prev) => ({ ...prev, verifiedOnly: args.value }))
          }
        />
      </gridLayout>

      <button
        className="btn btn-primary"
        onTap={() => onSearch(filters)}
      >
        Search
      </button>
    </stackLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});