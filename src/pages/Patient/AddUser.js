import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { addUser } from "../../redux/userSlice"
import Swal from "sweetalert2";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nama: '',
    usia: '',
    jenis_kelamin: '',
    riwayat_penyakit:'',
  });

  const handleAddUser = () => {
    setValues({ nama: '', usia: '', jenis_kelamin:'', riwayat_penyakit:''  });
    dispatch(addUser({
      id: uuidv4(),
      nama: values.nama,
      usia: values.usia,
      jenis_kelamin: values.jenis_kelamin,
      riwayat_penyakit: values.riwayat_penyakit,
    }));
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Data Pasien Ditambahkan',
      showConfirmButton: false,
      timer: 1500
  });
    navigate('/list-user');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
        <h1 className="text-center font-bold text-2xl text-gray-700">Tambah Data Pasien</h1>
      <TextField
        label="Name"
        value={values.nama}
        onChange={(e) => setValues({ ...values, nama: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Verra' }}
      />
      <br />
      <TextField
        label="Usia"
        value={values.usia}
        onChange={(e) => setValues({ ...values, usia: e.target.value })}
        inputProps={{ type: 'number', placeholder: '21' }}
      />
      <br />
      <TextField
        label="Jenis Kelamin"
        value={values.jenis_kelamin}
        onChange={(e) => setValues({ ...values, jenis_kelamin: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Perempuan' }}
      />
      <br />
      <TextField
        label="Riwayat Penyakit"
        value={values.riwayat_penyakit}
        onChange={(e) => setValues({ ...values, riwayat_penyakit: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Asma' }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser