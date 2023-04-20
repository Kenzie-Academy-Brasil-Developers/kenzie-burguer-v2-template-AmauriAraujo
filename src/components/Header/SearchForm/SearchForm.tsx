import { MdSearch } from "react-icons/md";
import { StyledSearchForm } from "./style";
import { StyledButton } from "../../../styles/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { CartContext } from "../../../providers/CartContext/CartContext";

export interface ISearchFormData {
  name: string;
}

const SearchForm = () => {
  const { filterProducts } = useContext(CartContext);

  const { register, handleSubmit } = useForm<ISearchFormData>();

  const submit: SubmitHandler<ISearchFormData> = (formData) => {
    filterProducts(formData);
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit(submit)}>
      <input type="text" placeholder="Digitar pesquisa" {...register("name")} />
      <StyledButton type="submit" $buttonSize="medium" $buttonStyle="green">
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
