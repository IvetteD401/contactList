const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contact: [
				{
					full_name: "",
					email: "",
					phone: "",
					address: "",
					agenda_slug: ""
				}
			],
			agenda: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			newContact: (a, b, c, d) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: a,
						email: b,
						phone: c,
						address: d,
						agenda_slug: "ivetted"
					})
				});

				console.log("clicked", a, b, c, d);
			},
			deleteContact: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "DELETE",
					headers: { "Content-Type": "aplication/json" }
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/ivetted")
						.then(response => response.json())
						.then(data => {
							setStore({ agenda: data });
						});
				});
			}
		}
	};
};

export default getState;
