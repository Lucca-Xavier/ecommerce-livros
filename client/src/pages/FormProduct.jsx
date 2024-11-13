import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormProduct = () => {
    // Estados para armazenar as entradas do formulário
    const [name, setName] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [sinopse, setSinopse] = React.useState('');
    const [year, setYear] = React.useState('');
    const [image, setImage] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [qntEstoque, setQntEstoque] = React.useState('');

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 51 }, (_, i) => currentYear - i);

    const navigate = useNavigate(); // Para navegação após o envio do formulário

    const handleSubmit = async (e) => {
        e.preventDefault();

        const produto = {
            name,
            author,
            category,
            sinopse,
            year,
            image,
            price,
            qntEstoque,
        };

        try {
            const response = await fetch(`http://localhost:3000/products/add`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(produto),
            });

            const result = await response.json();

            if (response.ok) {
                console.log("Produto adicionado", result);
                navigate('/adminhome');
            } else {
                console.error("Erro ao adicionar produto", result.error);
            }
        } catch (error) {
            console.error("Erro ao fazer a requisição:", error);
        }
    };

    return (
        <div>
            <h2 className='text-center text-xl my-16'>Cadastrar Livro</h2>
            <form onSubmit={handleSubmit} className='mx-20'>
                <p>Nome do Livro</p>
                <input
                    className='bg-gray-100 w-full rounded py-1 mt-2 mb-6'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <p>Autor</p>
                <input
                    className='bg-gray-100 w-full rounded py-1 mt-2 mb-6'
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <div className='grid grid-cols-2 gap-12'>
                    <span className='col-span-1'>
                        <p>Categoria</p>
                        <input
                            className='bg-gray-100 w-full rounded py-1 mt-2 mb-6'
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </span>
                    <span className='col-span-1'>
                        <p>Ano de Publicação</p>
                        <select
                            className='bg-gray-100 w-full rounded py-1 mt-2 mb-6'
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        >
                            <option value="" disabled>Selecione o ano</option>
                            {years.map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                    </span>
                </div>

                <div className='grid grid-cols-2 gap-12'>
                    <span className='col-span-1'>
                        <p>Quantidade em estoque</p>
                        <input
                            className='bg-gray-100 w-full rounded py-1 mt-2 mb-6'
                            type="number"
                            value={qntEstoque}
                            onChange={(e) => setQntEstoque(e.target.value)}
                        />
                    </span>
                    <span className='col-span-1'>
                        <p>Preço</p>
                        <input
                            className='bg-gray-100 w-full rounded py-1 mt-2 mb-6'
                            type="number"
                            step="0.01"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </span>
                </div>

                <p>Sinopse</p>
                <textarea
                    className='bg-gray-100 w-full rounded py-1 mt-2 mb-6'
                    value={sinopse}
                    onChange={(e) => setSinopse(e.target.value)}
                />

                <p>Imagem</p>
                <input
                    className='bg-gray-100 w-full rounded py-1 mt-2 mb-6'
                    type="text"
                    placeholder="URL da imagem"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <button
                    type="submit"
                    className='bg-emerald-500 text-white rounded py-2 w-full'
                >
                    Cadastrar Produto
                </button>
            </form>
        </div>
    );
};

export default FormProduct;
