// src/Components/List.js
import React, {Component} from "react";  
import $ from "jquery";

class List extends Component {
    constructor(){  
        super();  
        this.state = {
            belanja : [
				{id: "1", nama: "Apel", jumlah: "10"},
				{id: "2", nama: "Nanas", jumlah: "7"},
				{id: "3", nama: "Semangka", jumlah: "4"},
            ],  
            id: "",
            nama: "",
            jumlah: "",
			action: "" 
		} 	
	}  
	
	bind = (event) => {
		this.setState({[event.target.name]: event.target.value});  
		/* fungsi ini digunakan untuk memasukkan data dari elemen input 
		ke variable state. 
		contoh ketika input nis diisi, maka secara otomatis variabel nis 
		pada state bernilai sesuai dengan inputan 
		*/  
	}  

	Add = () => {  
		// mengosongkan nilai nis, nama, dan alamat  
		// pada saat tombol add ditekan  
		this.setState({  
            id: "",
			nama: "",  
			jumlah: "",  
			action: "insert"  
		}); 
	}
			
	Edit = (item) => {  
		this.setState({  
            id: item.id,
            nama: item.nama,  
			jumlah: item.jumlah,  
			action: "update"  
		});  
	}  
			
	SaveBelanja = (event) =>{  
		event.preventDefault();  
		// temp digunakan untuk menyimpan sementara  
		// data array belanja  
		let temp = this.state.belanja;  
				
		if (this.state.action === "insert") {
			// temp akan ditambahkan dengan data belanja yang baru  
			// sesuai dengan data yang dimasukkan pada form  
			temp.push({  
				id: this.state.id, 
				nama: this.state.nama,  
				jumlah: this.state.jumlah  
			});  
		} else if (this.state.action === "update") {  
			// mencari index data yang akan diubah  
			let index = temp.findIndex(item => item.id === this.state.id);  
			// mengubah data array sesuai dengan masukan pada form  
            temp[index].id = this.state.id;
            temp[index].nama = this.state.nama;  
			temp[index].jumlah = this.state.jumlah;  
		}  
					
		// array belanja diupdate dengan nilai data temp  
		this.setState({belanja: temp});  
				
		// menutup modal  
		$("#modal").modal('hide');  
	}
    	
	Drop = (index) => {  
		// temp digunakan untuk menyimpan sementara  
		// data array belanja  
		let temp = this.state.belanja;  
			
		// menghapus data pada index yang dihapus  
		temp.splice(index,1);  
			
		// array belanja diupdate dengan nilai data temp  
		this.setState({belanja: temp});  
	}  
    
    render(){ 
    	return (  
    	    <div className="container">  
    	        { /* generate list */ }  
    	        <ul className="list-group">  
    	          {this.state.belanja.map((item,index) => {  
    	            return (  
                        
    	              <li className="list-group-item" key={index}>  
    	                <h5 className="text-info">{item.nama}</h5>  
                        <h6>ID Barang: {item.id}</h6>  
                        <h6>Jumlah: {item.jumlah}</h6>  
                        
    	  
    	                <button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}  
    	                data-toggle="modal" data-target="#modal">  
    	                  Edit  
    	                </button>  
    	                <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>  
    	                  Hapus  
    	                </button>  
    	              </li>  
    	            );  
    	          })}  
    	        </ul>  
    	        <button className="btn btn-sm btn-success m-3" onClick={this.Add}  
    	        data-toggle="modal" data-target="#modal">  
    	          Tambah Data  
    	        </button>  
    	  
    	        { /* elemen form modal */ }  
    	        <div className="modal fade" id="modal">  
    	          <div className="modal-dialog">  
    	            <div className="modal-content">  
    	              <div className="modal-header bg-dark text-white">  
    	                <h5>Barang yang ingin Anda beli</h5>  
    	              </div>
                      <form onSubmit={this.SaveBelanja}>  
    	              <div className="modal-body">
                        ID Barang  
    	                <input type="text" name="id" className="form-control" onChange={this.bind}  
    	                value={this.state.id} />  
                        Nama  
    	                <input type="text" name="nama" className="form-control" onChange={this.bind}  
    	                value={this.state.nama} />  
    	                Jumlah  
    	                <input type="text" name="jumlah" className="form-control" onChange={this.bind}  
    	                value={this.state.jumlah} />  
    	              </div>  
    	              <div className="modal-footer">  
    	                <button type="submit" className="btn btn-primary">  
    	                  Simpan  
    	                </button>  
    	              </div>  
    	              </form>  
    	            </div>  
    	          </div>  
    	        </div>  
    	      </div>  
    	    );  
          } 
        } 
export default List;