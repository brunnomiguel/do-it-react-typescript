import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

import {
  useState,
  useEffect,
  useCallback,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";

import { FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";

interface InputProps extends ChakraTextareaProps {
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "red.500",
  default: "grey.200",
  focus: "purple.800",
  filled: "green.500",
};

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  InputProps
> = ({ label, error = null, icon: Icon, ...rest }, ref) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      return setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel color="grey.400">{label}</FormLabel>}
      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement color={inputVariation[variation]} mt="2.5">
            <Icon />
          </InputLeftElement>
        )}
        <ChakraTextarea
          bg="grey.50"
          variant="outline"
          color={inputVariation[variation]}
          borderColor={inputVariation[variation]}
          onChangeCapture={(event) => setValue(event.currentTarget.value)}
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          _hover={{ bgColor: "grey.100" }}
          _placeholder={{ color: "grey.300" }}
          _focus={{
            bg: "grey.100",
          }}
          size="lg"
          h="60px"
          ref={ref}
          {...rest}
        />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const TextArea = forwardRef(TextAreaBase);
