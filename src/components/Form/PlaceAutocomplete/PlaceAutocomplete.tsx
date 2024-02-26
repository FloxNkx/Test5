import React, { useState, useEffect, useMemo, useRef } from 'react'
import { TextField, Grid, Typography, Autocomplete, Box } from '@mui/material'
import parse from 'autosuggest-highlight/parse'
import throttle from 'lodash/throttle'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { getGeocode, getZipCode } from 'use-places-autocomplete'

const autocompleteService = { current: null }

interface PlaceType {
    description: string
    structured_formatting: {
        main_text: string
        secondary_text: string
        main_text_matched_substrings: readonly {
            offset: number
            length: number
        }[]
    }
}

const PlacesAutocomplete = ({
    labelField,
    required,
    value,
    onSelect,
}) => {
    const [inputValue, setInputValue] = useState('')
    const [options, setOptions] = useState<readonly PlaceType[]>([])
    const [error, setError] = useState(false)
    const inputElementRef = useRef<HTMLInputElement>(null)

    const fetch = useMemo(
        () =>
            throttle(
                (
                    request: { input: string },
                    callback: (results?: readonly PlaceType[]) => void,
                ) => {
                    autocompleteService.current?.getPlacePredictions(
                        {
                            ...request,
                            componentRestrictions: { country: 'US' },
                        },
                        callback,
                    )
                },
                200,
            ),
        [],
    )

    useEffect(() => {
        if (!autocompleteService.current && window.google) {
            autocompleteService.current =
                new window.google.maps.places.AutocompleteService()
        }

        if (!inputValue) {
            setOptions(value ? [value] : [])
            return
        }

        fetch({ input: inputValue }, (results?: readonly PlaceType[]) => {
            setOptions(results || [])
        })
    }, [inputValue, fetch, value])

    useEffect(() => {
        setInputValue(value?.description || '')
    }, [value])

    const handleChange = (event: any, newValue: PlaceType | null) => {
        setError(!newValue && required)
        onSelect(newValue)
        if (inputElementRef.current) {
            inputElementRef.current.blur()
        }
    }

    const handleInputChange = (event: any, newInputValue: string) => {
        setInputValue(newInputValue)
    }

    const isOptionEqualToValue = (option: PlaceType, value: PlaceType) =>
        option.description === value.description

    return (
        <Autocomplete
            fullWidth
            isOptionEqualToValue={isOptionEqualToValue}
            filterOptions={x => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            onChange={handleChange}
            onInputChange={handleInputChange}
            inputValue={inputValue || ''}
            renderInput={params => (
                <TextField
                    {...params}
                    inputRef={inputElementRef}
                    label={labelField}
                    error={error}
                    helperText={error ? 'This field is required' : ''}
                    InputProps={{
                        ...params.InputProps,
                        style: { backgroundColor: 'white', borderRadius: 15 },
                    }}
                    InputLabelProps={{
                        ...params.InputLabelProps,
                        style: {
                            ...params.InputLabelProps?.style,
                            borderRadius: 15,
                        },
                    }}
                    style={{ borderRadius: 15 }}
                />
            )}
            renderOption={(props, option) => {
                const parts = parse(
                    option.structured_formatting.main_text,
                    option.structured_formatting.main_text_matched_substrings.map(
                        match => [match.offset, match.offset + match.length],
                    ),
                )
                const secondary_text =
                    option.structured_formatting.secondary_text
                return (
                    <li {...props}>
                        <Grid container alignItems='center'>
                            <Grid item>
                                <Box
                                    component={LocationOnIcon}
                                    sx={{ color: 'text.secondary', mr: 2 }}
                                />
                            </Grid>
                            <Grid item xs>
                                {parts.map((part, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            fontWeight: part.highlight
                                                ? 700
                                                : 400,
                                        }}
                                    >
                                        {part.text}
                                    </span>
                                ))}
                                {secondary_text.length > 0 && (
                                    <Typography
                                        variant='body2'
                                        color='text.secondary'
                                    >
                                        {secondary_text}
                                    </Typography>
                                )}
                            </Grid>
                        </Grid>
                    </li>
                )
            }}
        />
    )
}

export default PlacesAutocomplete
